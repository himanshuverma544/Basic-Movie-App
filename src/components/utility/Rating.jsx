export default function Rating({ given, length = 5 }) {

  return (
    <div className="rating flex p-1">
      {Array.from({ length: length }).map((_, index) =>
        <div key={index} className="icon-cont">
          {index < Math.floor(given) ? 
            '★' : '☆'
          }
        </div>
      )}
    </div>
  );
}
