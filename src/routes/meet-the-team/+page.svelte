<script>
  import HuddleImage from "$lib/assets/images/team-huddled.jpg";

  import MotsamaiImage from "$lib/assets/images/team-members/motsamai.jpg";
  import ThabangImage from "$lib/assets/images/team-members/thabang.jpg";
  import LydiaImage from "$lib/assets/images/team-members/lydia.jpg";
  import BonganiImage from "$lib/assets/images/team-members/bongani.jpg";
  import MzoxoloImage from "$lib/assets/images/team-members/mzoxolo.jpg";

  const teamMembers = [
    {
      name: "Motsamai",
      avatar: MotsamaiImage,
      description: `I'm coach Motsamai Motsepe, over 15 years experience of youth football coaching, scouting and talent identification. Armed with CAF C license coaching badge and SAFA LEVEL 2 certificate.`,
    },
    {
      name: "Bongani",
      avatar: BonganiImage,
      description: `Coach Bongani Makakola. Passionate and dedicated youth coach for well over 5 years. Qualified as a development coach with a CAF D license certificate South African Football Association and willing to upgrade further.`,
    },
    {
      name: "Mzoxolo",
      avatar: MzoxoloImage,
      description:
        "Hi My name is Mzoxolo Ntentelele, known as coach Mizo. A grounded family man and part time development coach and a founder member of Sharpeville Rhinos with over 10 years experience.",
    },
    {
      name: "Thabang",
      avatar: ThabangImage,
      description: `My name is Thabang Moleli founder member and partner at Sharpeville Rhinos formerly known as Sharpeville Benfica. I'm an information technology specialist by profession have a high drive of helping children and serving communities anyway possible.`,
    },
    {
      name: "Lydia",
      avatar: LydiaImage,
      description: `I'm Lydia Lee Ndongela... bringing children together in one safe space is my priority and a safe child is a very happy child. Been doing this for 5 years now.`,
    },
  ];
</script>

{#snippet teamBio(teamMember)}
  <div class="team-bio">
    <div class="team-bio-avatar">
      <img src={teamMember.avatar} alt="Staff photo of {teamMember.name}" />
    </div>
    <div class="team-bio-description">
      <h3>{teamMember.name}</h3>
      <p>{teamMember.description}</p>
    </div>
  </div>
{/snippet}

<div class="hero">
  <div class="hero-img" style="background-image: url({HuddleImage})"></div>
  <h1>Meet the Team</h1>
</div>

<section class="team-bios">
  {#each teamMembers as teamMember}
    {@render teamBio(teamMember)}
  {/each}
</section>

<style>
  .hero {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
  }

  .hero-img {
    position: absolute;
    width: 105%;
    height: 105%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: blur(2px);
    z-index: 0;
  }

  .hero h1 {
    position: relative;
    z-index: 1;
  }

  .team-bios {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    padding: 10rem 0;
    margin: 0 auto;
    gap: 4rem;
  }

  .team-bios::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/sharpeville-rhinos/soccer-bg.jpg");
    z-index: -1;
    opacity: 0.1;
  }

  .team-bio {
    width: 30%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .team-bio-avatar {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .team-bio-avatar img {
    display: block;
    width: 250px;
    object-fit: cover;
    object-position: center center;
    aspect-ratio: cos(30deg);
    clip-path: polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0);
  }

  .team-bio-description p {
    max-width: 33ch;
  }

  .team-bio-description h3 {
    margin-block: 1rem;
  }
</style>
