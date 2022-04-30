import "./travelstyle.css";

const DesignInterface = (props) => {
  return (
    <div className="">
      <div className="lists">
        <div className="imgSection">
          <img src={props.neww.img} alt="" />
        </div>
        <div className="details">
          <div className="top">
            <span className="location">{props.neww.location}</span>
            <span>
              <a className="link" href="http://www.google.com">
                View on Google Maps
              </a>
            </span>
          </div>
          <div className="traveltitle">
            <h2>{props.neww.title}</h2>
          </div>
          <div className="dates">
            <p>
              {props.neww.date.start} - {props.neww.date.end}
            </p>
          </div>
          <div className="caption">
            <p>{props.neww.details}</p>
          </div>
        </div>
      </div>
      <hr className="linee" />
    </div>
  );
};

export default DesignInterface;
