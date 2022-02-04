import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Illia Hladush",
          title: "Software Engineer",
          img:
            "assets/Illy.jpeg",
          icon: "assets/linkedin.png",
          url: "https://www.linkedin.com/in/illia-hladush/",
          desc:
            "Arsen is an expert at taking innovative ideas and turning them into solutions",
        },

        {
          id: 2,
          name: "Anton Zyhar",
          title: "Senior Developer",
          img:
            "assets/Anton.jpeg",
          icon: "assets/linkedin.png",
          url: "https://www.linkedin.com/in/anton-zyhar-03547612a/",
          desc:
            "Arsen is always a team player, works well with everyone, and makes sure everyone feels comfortable on the task.",
          featured: true,
        },
        
        {
          id: 3,
          name: "Georgii Trevgoda",
          title: "Entrepreneur",
          img:
            "assets/Gosha.jpeg",
          icon: "assets/linkedin.png",
          url: "https://www.linkedin.com/in/georgii-trevgoda-8b0864201/",
          desc:
            //"Arsen is highly professional and was quick to provide me with what I expected, and beyond!",
            "This guy sticks out among everyone when it comes to facing tough problems and providing solutions to them",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1 className="cyber-text">Testimonials</h1>
            <div className="container">
                {data.map((d)=>(
                <div className={d.featured ? "card featured" : "card" } key={d.id}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} alt="" className="user" />
                        <a href={d.url}><img src={d.icon} alt="" className="right"  /></a>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
