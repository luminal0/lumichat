import { CiLogout } from "react-icons/ci";
import useLogout from "../../../hooks/useLogout";

const LogoutButton = () => {

  const {loading,logout} = useLogout();
  return (
    <div className="mt-auto">
        <CiLogout className="cursor-pointer w-6 h-6 text-white"
        onClick={logout}
        />
    </div>
  )
}

export default LogoutButton