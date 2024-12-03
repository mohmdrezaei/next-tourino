import api from "src/configs/api"

const sendOtp =async(mobile)=>{
 try {
    const res  = await api.post("/auth/send-otp" , {mobile})
    return {res}
 } catch (error) {
    return {error}
 }
}

export {sendOtp}