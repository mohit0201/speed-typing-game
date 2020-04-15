import {useState, useEffect, useRef} from 'react'

function useWordGameElements(startingTime) {
    const [textInput, setTextInput] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

    function handleChange(e) {
        const { value } = e.target
        setTextInput(value)
    }

    function calculateWordCount(text) {
        const wordsArray = text.trim().split(" ")
        return wordsArray.filter(word => word !== "").length
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(startingTime)
        setTextInput("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(textInput))
    }

    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return {
        textBoxRef,
        handleChange,
        textInput,
        isTimeRunning,
        timeRemaining,
        startGame,
        wordCount,
    }
}

export default useWordGameElements
