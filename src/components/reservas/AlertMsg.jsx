
export default function AlertMsg({msg, stateVar, className }) {


    return (
        <>
        {stateVar && (
        <div
        className={`${className} align-self-center`}
        role="alert">
       {msg}
        </div>
        )}
        </>
  

    )

}