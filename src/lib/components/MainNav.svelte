<div class="nav-wrapper">
  <div class="nav-border">
    <nav>
      <a href="/">Home</a>
      <a href="/meet-the-team">Meet the Team</a>
      <a href="/fixtures-and-results">News & Fixtures</a>
    </nav>
  </div>
</div>

<style>
  nav {
    background: #353639;
    padding: 0 5rem;
    --p: 50px;
    --clip-path: polygon(
      var(--p) 100%,
      calc(100% - var(--p)) 100%,
      100% 0,
      0 0
    );
    clip-path: var(--clip-path);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav a {
    color: white;
    padding: 1rem;
    text-decoration: none;
    transition:
      background 0.2s ease,
      color 0.2s ease;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  nav a:hover {
    background: #92bce2;
    color: #353639;
  }
</style>
