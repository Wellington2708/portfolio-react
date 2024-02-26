import './styles.css'

export default function Certificates({ imageUrl, alt, isActive }) {
    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img src={imageUrl} alt={alt} className='d-block w-100 certificate-image' />
        </div>
     )
}