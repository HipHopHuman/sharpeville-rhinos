<script>
  import TeamImage from "$lib/assets/images/team.jpg";
  import JoyImage from "$lib/assets/images/joy.jpg";
  import VictoryImage from "$lib/assets/images/victory.jpg";
  import DeterminationImage from "$lib/assets/images/determination.webp";
  import RestImage from "$lib/assets/images/rest.webp";
  import StrategyImage from "$lib/assets/images/strategy.jpg";
</script>

<div class="hero">
  <div class="hero-img" style="background-image: url({TeamImage})"></div>
  <h1>More than Football</h1>
</div>

<section>
  <img
    src={JoyImage}
    alt="Four children huddled together in celebration of a soccer victory"
  />
  <div>
    <h2>Who we Are</h2>
    <p>
      <em>Sharpeville Rhinos Sports Club</em> was founded in 1995 under the name
      <em>Real Benfica</em>. The name was subsequently changed to
      <em>Sharpeville Benfica</em>. After partnering with
      <em>Blackheath Rhinos</em> from the UK in 2023, the name was finally
      changed to <em>Sharpeville Rhinos</em>.
    </p>
  </div>
</section>

<section>
  <img
    src={VictoryImage}
    alt="A kid player dressed in a red and gold uniform being presented a gold trophy by two Rhinos coaches in baby blue collared shirts"
  />
  <div>
    <h2>What we Do</h2>
    <p>
      The club is based in the Sharpeville township and for many years has been
      a place for talented youth to develop their football and social skills.
      The club’s development structures begin from <strong>Under-8</strong> to
      <strong>Under-20</strong> levels. The club prides itself in offering
      <em>South African Football Association (SAFA)</em>
      accredited coaches, some of which are former players of the club.
    </p>
  </div>
</section>

<section>
  <img
    src={DeterminationImage}
    alt="A determined Rhinos player tackling a member of the opposing team"
  />
  <div>
    <h2>Our Pride in Education</h2>
    <p>
      The club puts a lot of emphasis on the players furthering their tertiary
      education and have in recent times propelled the players to further their
      education at the nearby <em>Vaal University of Technology</em> and
      <em>North West University</em>. The club assists older willing players who
      might have not turned professional by sponsoring their coaching and
      refereeing courses in order to afford them other options in the football
      fraternity.
    </p>
  </div>
</section>

<section>
  <img src={RestImage} alt="The Rhinos team resting on the gravel field" />
  <div>
    <h2>Our Community</h2>
    <p>
      The majority of our <strong>80+</strong> players are from less-fortunate backgrounds
      and poor communities in the Vaal Triangle region, namely Sebokeng, Boipatong,
      Tshepiso, Bophelong, and Vereeniging.</p>
    <p>Due to their backgrounds, it is a challenge
      for the club to cover their basic needs such as soccer boots, shin guards,
      nutritional meals, and transport to and from training and matches. The club
      sustains itself through the prize monies it receives from winning small local
      tournaments and individual donations from willing people. The gravel field
      which the club currently uses for training is maintained by volunteer community
      members and parents. Without this valuable financial aid from the corporate
      world, volunteer coaches, and helpful parents, the club would not exist.
    </p>
  </div>
</section>

<section>
  <img
    src={StrategyImage}
    alt="Coach giving the team a pep speech on styrategy"
  />
  <div>
    <h2>Training</h2>
    <p>
      We currently have 4 teams that play in the Selkent League and offer weekly
      training to those in a team as well as those who would just like to
      participate in the session. Training focuses on increasing skills, having
      fun, and spending time with friends, with the aim of improving both
      football and social skills.
    </p>
    <h3>Training Times:</h3>
    <p>Tuesday to Thursday</p>
    <p>16h00 until 18h00 daily</p>
    <p>Matches on Saturdays</p>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
    overflow: hidden;
    isolation: isolate;
  }

  .hero-img {
    position: absolute;
    display: block;
    width: 105%;
    height: 105%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
    filter: blur(5px);
  }

  .hero h1 {
    z-index: 0;
  }

  section {
    position: relative;
    display: flex;
  }

  section::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background-image: url('/soccer-bg.jpg');
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.1;
  }

  section:nth-child(even) {
    flex-direction: row-reverse;
  }

  section img {
    display: block;
    width: 50%;
  }

  section div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 0 auto;
    text-align: justify;
    width: 50%;
  }

  section div h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: bold;
    text-decoration: underline;
  }

  section div p {
    max-width: 55ch;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  section div h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
</style>
