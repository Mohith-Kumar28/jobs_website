import FileUpload from "@/components/FileUpload"
import Footer from "@/components/layout/Footer"
import NavBar from "@/components/layout/NavBar"
const fileUpload = () => {
    return (
        <div>
            <NavBar/>
            <FileUpload/>
            <Footer/>
        </div>
    )
}

export default fileUpload
