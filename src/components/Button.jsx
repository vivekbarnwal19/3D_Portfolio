
const Button = ({text , className, id}) => {
  return (
    <a 
      onClick={(e)=> {
        e.preventDefault();

        const target = document.getElementById('counter');

        if(target && id ){
          const offset = window.innerheight * 0.15;

          const top = target.getBoundingClientReact().top + window.scrollY-offset;

          window.scrollTo( { top, behaviour: 'smooth' })
        }
      }}
    
    className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>

  )
}

export default Button