interface HeaderProps {
  handleBgImageChange: any;
}

const Header = function ( { handleBgImageChange } : HeaderProps ) {
  return (
    <div className="text-center">
      <div className="shadow-sm btn-group btn-group-sm me-2 mb-3" role="group" aria-label="Background group">
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/4249821/pexels-photo-4249821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Forest</button>
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Ocean</button>
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/139366/pexels-photo-139366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Blue Sky</button>
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Cofee Shop</button>
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Book Store</button>
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/8111854/pexels-photo-8111854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Home</button>
        <button onClick={ () => handleBgImageChange("url('https://images.pexels.com/photos/10636731/pexels-photo-10636731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')") } type="button" className="btn btn-light">Empty Classroom</button>
        <button onClick={ () => handleBgImageChange("url('https://i.ytimg.com/vi/1tUPFQ54gqc/maxresdefault.jpg')") } type="button" className="btn btn-light">Lofi</button>
      </div>

      <h1 className="text-white fw-semibold">Let's get to work!</h1>
      <h5 className="text-light fw-normal">What's the highest leverage thing you can do right now?</h5>
    </div>
  )
}

export default Header;