import ChatHistory from "./ChatHist"
import ChatInput from "./ChatInput"


function Chatmain(){
    return(
        <>
        <div className="bg-dark p-2 pb-4 ">
        <ChatHistory/>
        <ChatInput/>
        </div>
        </>
    )
}
export default Chatmain