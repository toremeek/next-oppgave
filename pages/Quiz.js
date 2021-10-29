import { useEffect, useState } from "react";
import axios from "axios";
import CreateQuiz from "../components/CreateQuiz";

const Quiz = () => {
    const [quiz, setQuiz] = useState();
    
    const getQuizzes = async() => {
        try{
            const response = await axios.get("/api/quizApi")
            if(response?.data?.success){
                
                setQuiz(response.data.data);
                
            }
        }
        catch(error){
            console.log(error?.response?.data)
        }
    }
    useEffect(() => {
        getQuizzes()
    }, [])
return (
    <>
    <h2>Hei fra quiz</h2>
    <p>Får tilbake fra api-et:</p>
    <CreateQuiz />
    </>
)
}

export default Quiz;