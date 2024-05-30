import ChatHistory from "./ChatHist"
import ChatInput from "./ChatInput"


function Chatmain(){
    return(
        <>
        <div className="bg-primary p-2">
        <ChatHistory/>
        <ChatInput/>
        </div>
        </>
    )
}
export default Chatmain