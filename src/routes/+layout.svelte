<script>
  import "$lib/assets/css/global.css";
  import Logo from "$lib/components/Logo.svelte";
  import MainNav from "$lib/components/MainNav.svelte";

  let { children } = $props();
</script>

<div class="header">
  <div class="w-small"><Logo /></div>
  <MainNav />
</div>

{@render children()}

<div class="footer">
  <section class="contact">
    <h2>Contact Us</h2>
    <p>
      We'd love to hear from you! Whether you have a question, feedback, or just
      want to say hello, feel free to reach out.
    </p>
  </section>
  <section class="contact-details">
    <div class="contact-info">
      <p><em>Address</em>: Sharpeville, Vereeniging, 1933</p>
      <p><em>Contact Number</em>: +27 73 174 6339</p>
      <p><em>Contact Name</em>: Motsamai Motsepe</p>
      <p><em>Email</em>: mpmotsepe40@gmail.com</p>
      <br />
      <p>
        <a href="https://www.facebook.com/sbsdc/" target="_blank"
          >Follow us on Facebook!</a
        >
      </p>
    </div>
    <div class="contact-map">
      <div class="embed-map-responsive">
        <div class="embed-map-container">
          <iframe
            title="Interactive map of Sharpeville Township"
            class="embed-map-frame"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sharpeville%2C%20Vereeniging%2C%201933&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          ></iframe><a
            href="https://sprunkiretake.net"
            style="font-size:2px!important;color:gray!important;position:absolute;bottom:0;left:0;z-index:1;max-height:1px;overflow:hidden"
            >sprunki retake</a
          >
        </div>
        <style>
          .embed-map-responsive {
            position: relative;
            text-align: right;
            width: 100%;
            height: 0;
            padding-bottom: 66.66666666666666%;
          }
          .embed-map-container {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          .embed-map-frame {
            width: 100% !important;
            height: 100% !important;
            position: absolute;
            top: 0;
            left: 0;
          }
        </style>
      </div>
    </div>
  </section>
  <section class="copyright-notice">
    &copy; Sharpeville Rhinos Football Club {new Date().getFullYear()}
  </section>
</div>

<style>
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    padding-top: 1rem;
    isolation: isolate;
    z-index: 2;
  }

  .footer {
    background: #1e1f20;
    color: white;
    text-align: center;
  }

  .footer h2 {
    font-size: 3rem;
    margin-block: 2rem;
  }

  .footer p {
    font-size: 1.25rem;
  }

  .contact {
    padding: 1rem;
  }

  .copyright-notice {
    font-family: Tahoma, sans-serif;
    background: black;
    padding: 1rem;
  }

  .contact-details {
    margin-block: 3rem;
    margin-inline: auto;
    display: flex;
    width: 75%;
    align-items: center;
    justify-content: center;
  }

  .contact-info {
    font-family: Tahoma, sans-serif;
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact-info p {
    font-size: 1.5rem;
  }

  .contact-info em {
    color: #92bce2;
  }

  .contact-map {
    border: 1px solid;
    flex: 1;
  }

  .w-small {
    width: 150px;
  }

  @media only screen and (max-width: 1000px) {
    .contact-details {
      flex-direction: column;
      width: 90%;
    }

    .contact-info, .contact-map {
      flex: 1;
      display: block;
      align-self: auto;
    }

    .contact-map {
      width: 100%;
      margin-top: 2rem;
    }
  }
</style>
