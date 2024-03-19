import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { useAuthContext } from "../../context/AuthContext";



const MessageContainer = () => {
  const { selectedConversation , setSelectedConversation } = useConversation();

  useEffect(() => {

    return () => setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation? (
        <NoChatSelected />
      ) : (
        <>
        <div className="bg-gray-700 px-4 py-2 mb-2 text-center">
            <span className="text-white font-bold">{selectedConversation.fullName}</span>
        </div>

        <Messages />
        <MessageInput />
        </>
      )}
    </div>
  )
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋  {authUser.fullName}</p>
				<p>Select a chat to start messaging</p>
        <img src="https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif" className="pt-12" />
			</div>
		</div>
	);
};

export default MessageContainer