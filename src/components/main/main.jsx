import "./Main.css"

function Main() {
  return (
    <main>
      <section className="home" id="home">
        <div className="profile">
          <img className="profile_picture" src="https://s1.abcstatics.com/media/play/2021/04/28/sailor-moon-k28F--1248x698@abc.jpg" alt="profile picture" />
          <div className="name_box">Francisco Romero</div>
        </div>
        <h1 className="home-heading">Crafting imagination into interactive realities.</h1>
        <p className="home-subheading">Bringing unique ideas to life through code, design, and creativity</p>
      </section>
    </main>
  );
}

export default Main;