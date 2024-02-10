import React from 'react'

const Feedback = () => {
  return (
    <div className="feedbackSection">
      <h1 className="heading feedbackHead" style={{ textAlign: 'center' }}>
  Happy Internee <span className="protest-riot-regular strongWord">Reviews</span>
</h1>

      <div className="feedbackHolder">
        <div className="feedbackCard">
          <div className="avatarAndName">
            <div className="avatar">
              <img
                src="https://th.bing.com/th/id/R.d7fd9e0b952d5f9b9adff6ec29a8b20d?rik=JHeUYg90Qe%2fZGQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f5%2fBoy-Transparent-Background.png&ehk=AlAG5V9aPrvFod8brU9FjA%2bRSNsh%2bCPkib07t3d9sPg%3d&risl=&pid=ImgRaw&r=0"
                alt="" />
            </div>
            <h2 className="cardTitle protest-riot-regular">Ahmed Sikandar</h2>
          </div>
          <p className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <span className="cardDate protest-riot-regular">January 15, 2023</span>
        </div>
        <div className="feedbackCard">
          <div className="avatarAndName">
            <div className="avatar">
              <img
                src="https://th.bing.com/th/id/R.d7fd9e0b952d5f9b9adff6ec29a8b20d?rik=JHeUYg90Qe%2fZGQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f5%2fBoy-Transparent-Background.png&ehk=AlAG5V9aPrvFod8brU9FjA%2bRSNsh%2bCPkib07t3d9sPg%3d&risl=&pid=ImgRaw&r=0"
                alt="" />
            </div>
            <h2 className="cardTitle protest-riot-regular">Awais Ali</h2>
          </div>
          <p className="cardText">"Being Data enthusiast, internee.pk internship helps me to
            programed more and solve more data related problems during the task"</p>
          <span className="cardDate protest-riot-regular">January 15, 2023</span>
        </div>
        <div className="feedbackCard">
          <div className="avatarAndName">
            <div className="avatar">
              <img
                src="https://th.bing.com/th/id/R.d7fd9e0b952d5f9b9adff6ec29a8b20d?rik=JHeUYg90Qe%2fZGQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f5%2fBoy-Transparent-Background.png&ehk=AlAG5V9aPrvFod8brU9FjA%2bRSNsh%2bCPkib07t3d9sPg%3d&risl=&pid=ImgRaw&r=0"
                alt="" />
            </div>
            <h2 className="cardTitle protest-riot-regular">Salman Ali</h2>
          </div>
          <p className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <span className="cardDate protest-riot-regular">January 15, 2023</span>
        </div>
      </div>

    </div>
  )
}

export default Feedback