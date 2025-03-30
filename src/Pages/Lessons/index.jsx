import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LessonsService } from "../../services/lessons";

const Lessons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDragAndDropModal, setShowDragAndDropModal] = useState(false);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [droppedWords, setDroppedWords] = useState([]);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const data = await LessonsService();
        setLessons(data);
        if (data.length > 0) {
          setCurrentLesson(data[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  const shuffleWords = useCallback(() => {
    if (!currentLesson?.drag_and_drop?.words) return;
    const words = [...currentLesson.drag_and_drop.words];
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    setShuffledWords(words);
  }, [currentLesson]);

  useEffect(() => {
    if (showDragAndDropModal && currentLesson?.drag_and_drop) {
      shuffleWords();
      setDroppedWords(Array(currentLesson.drag_and_drop.words.length).fill(null));
      setResult(null);
    }
  }, [showDragAndDropModal, currentLesson, shuffleWords]);

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("text/plain", word);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text/plain");
    const newDropped = [...droppedWords];
    newDropped[index] = word;
    setDroppedWords(newDropped);
    setDragOverIndex(null);
  };

  const checkAnswer = () => {
    if (!currentLesson?.drag_and_drop?.correct) return;
    
    const userAnswer = droppedWords.join(" ");
    const correctAnswer = currentLesson.drag_and_drop.correct;
    
    if (userAnswer === correctAnswer) {
      setResult("success");
      setTimeout(() => {
        navigate('/maria');
      }, 1500);
    } else {
      setResult("error");
      setTimeout(() => {
        shuffleWords();
        setDroppedWords(Array(currentLesson.drag_and_drop.words.length).fill(null));
        setResult(null);
      }, 1500);
    }
  };

  const nextSlide = () => setCurrentIndex(1);
  const prevSlide = () => setCurrentIndex(0);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;
  if (!currentLesson) return <div className="text-white text-center">No lessons available</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <div className="relative w-full max-w-4xl overflow-hidden flex items-center">
        
        <button
          onClick={prevSlide}
          className={`absolute left-4 z-10 text-yellow-400 text-4xl md:text-8xl transition-opacity duration-300 ${
            currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          &#60;
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="w-full flex-shrink-0 flex justify-center">
              <div className="w-72 h-96 border border-white md:w-[650px] md:h-[680px] bg-[#4A235A] rounded-lg flex flex-col items-center pt-4 transition-opacity duration-500">
                <div className="flex justify-center z-10 mb-[-60px] md:mb-[-80px]">
                  <h2 className="m-4 text-4xl font-bold">VOCABULARY</h2>
                </div>

                <div className="bg-white mt-48 p-6 rounded-lg w-full max-w-[90%] z-20">
                  <div className="flex justify-center">
                    <span className="text-red-500 text-2xl font-semibold m-6">WORD</span>  
                    <span className="text-black text-2xl font-semibold m-6">MEANING</span>  
                  </div>

                  {Object.entries(currentLesson.vocabulary).map(([english, spanish]) => (
                    <p key={english} className="text-lg text-black text-center">
                      <span className="text-red-500 font-semibold">{english}</span> =&gt;                           
                      <span className="text-black"> {spanish}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 flex justify-center">
              <div className="w-72 h-96 border border-white md:w-[650px] md:h-[680px] bg-[#4A235A] rounded-lg flex flex-col items-center pt-4 transition-opacity duration-500">
                <div className="flex justify-center z-10 mb-[-60px] md:mb-[-80px]">
                  <h2 className="m-4 text-4xl font-bold">EXAMPLE</h2>
                </div>
                
                <div className="flex justify-center z-10 mb-[-60px] md:mb-[-80px]">
                  <img 
                    src={currentLesson.image} 
                    className="w-48 md:w-[350px] transform translate-y-12 md:translate-y-16"
                    alt="Example"
                  />
                </div>
                <div className="bg-white mt-48 p-6 justify-center content-center rounded-lg w-full max-w-[90%] z-20">
                  <p className="text-black text-lg text-center">
                    {currentLesson.example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={`absolute right-4 z-10 text-yellow-400 text-4xl md:text-8xl transition-opacity duration-300 ${
            currentIndex === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >   
          &#62;
        </button>
      </div>

      {showDragAndDropModal && currentLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#4A235A] rounded-lg p-8 w-full max-w-2xl relative">
            <h2 className="text-3xl text-white font-bold text-center mb-6">Arma la frase</h2>
            
            <div className="flex justify-center mb-6">
              <img 
                src={currentLesson.image} 
                className="w-48 h-48 object-contain"
                alt="Lesson"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {droppedWords.map((word, index) => (
                <div
                  key={index}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`w-24 h-12 border-2 ${
                    dragOverIndex === index ? "border-yellow-400" : "border-white"
                  } rounded-lg flex items-center justify-center ${
                    word ? "bg-white" : "bg-transparent"
                  }`}
                >
                  <span className={`text-lg ${word ? "text-black" : "text-white"}`}>
                    {word || "_____"}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {shuffledWords.map((word, index) => (
                !droppedWords.includes(word) && (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, word)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg cursor-move"
                  >
                    {word}
                  </div>
                )
              ))}
            </div>

            {result && (
              <div className={`text-center text-xl font-bold mb-4 ${
                result === "success" ? "text-green-400" : "text-red-500"
              }`}>
                {result === "success" 
                  ? "CONGRATS! Now test your English with Maria." 
                  : "Error. Try again!"}
              </div>
            )}

            <button
              onClick={checkAnswer}
              disabled={droppedWords.some(word => !word)}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              READY
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowDragAndDropModal(true)}
        className="mt-8 px-6 py-3 bg-yellow-400 text-white rounded-lg text-lg font-semibold"
      >
        CONTINUE
      </button>
    </div>
  );
};

export default Lessons;