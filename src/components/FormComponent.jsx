import { useState } from "react"

const FormComponent = () => {
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    const [userNamecolor,setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRepasswordColor] = useState('')

    const validateForm = (e) =>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }
        else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้ 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }
        else{
            setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร')
            setPasswordColor('red')
        }
        if(password===repassword && repassword != ''){
            setErrorRePassword('')
            setRepasswordColor('green')
        }
        else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRepasswordColor('red')
        }
    }



    return( 
        <div>   
            <div className="container bg-slate-50 rounded-lg shadow-lg w-96">
                
                <form className="px-10 py-2.5" onSubmit={validateForm}>
                    <h2 className="text-center mb-5 text-2xl font-medium">ลงทะเบียน</h2>
                    <div className="form-control">
                        <label className="label-control">ชื่อผู้ใช้</label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{borderColor:userNamecolor}} id="" className="input-control" placeholder="" />
                        <small style={{color:userNamecolor}}>{errorUserName}</small>
                    </div>
                    <div className="form-control">
                        <label className="label-control">อีเมล</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{borderColor:emailColor}} id="" className="input-control" placeholder="" />
                        <small style={{color:emailColor}}>{errorEmail}</small>  
                    </div>
                    <div className="form-control">
                        <label className="label-control">รหัสผ่าน</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{borderColor:passwordColor}} id="" className="input-control" placeholder="" />
                        <small style={{color:passwordColor}}>{errorPassword}</small>
                    </div>
                    <div className="form-control">
                        <label className="label-control">ยืนยันรหัสผ่าน</label>
                        <input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} style={{borderColor:repasswordColor}} id="" className="input-control" placeholder="" />
                        <small style={{color:repasswordColor}}>{errorRePassword}</small>
                    </div>
                    <button type="submit" className="w-full  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ลงทะเบียน</button>
                </form>
            </div>
        </div>
        
     )
}
 
export default FormComponent