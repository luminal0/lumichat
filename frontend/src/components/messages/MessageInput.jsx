import { GrSend } from "react-icons/gr";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="absolute flex items-center inset-y-0 end-0 pe-3"
        >
          <GrSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
