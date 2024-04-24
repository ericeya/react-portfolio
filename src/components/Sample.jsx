import video from '../assets/tennis.mp4'

export default function Sample() {
    return (
        <div>
            <video autoPlay='' loop muted width="400px" height="800px">
                <source src={video} type='video/mp4' />
            </video>
        </div>
    )
}
