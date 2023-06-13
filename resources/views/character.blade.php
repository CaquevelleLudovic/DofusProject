@include('header')
<div id="Main" style="background-image: url('../asset/img/background/bg_<?= collect($characterId)->pluck('name')->first()?>.jpg');">

<div class="mainContent">

  <div class="card mainContentLeft content-size">
    <div class="characName">
    <h2 class="card-header para-h2-main"><?= collect($characterId)->pluck('title')->first()?></h2>
    </div>
      <div class="card-body">
        <h5 class="card-title para-h5-main"><?= collect($characterId)->pluck('subtitle')->first()?></h5>
        <p class="card-text para-p-main"><?= collect($characterId)->pluck('content')->first()?></p>
        <iframe width="100%" height="30%" src="<?= collect($characterId)->pluck('urlvideo')->first()?>" title="Le Cœur d&#39;Iop – DOFUS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
          <h4 class="card-title para-h4-main">Rôles</h4>
            <ul class="para-ul-main">
              <li class="para-li-main">Dégats</li>
              <li class="para-li-main">Amélioration</li>
              <li class="para-li-main">Placement</li>
            </ul>
          </div>
      </div>
  </div>

  <div class="card mainContentCenter content-size">
    <div class="character">
      <i class="fa-solid fa-chevron-left boutonLeft" id="boutonLeft"></i>
      <i class="fa-solid fa-chevron-right boutonRight" id="boutonRight"></i>
    </div>

    <div class="sexCharacter">
      <i class="fa-solid fa-mars"></i>
      <p> | </p>
      <i class="fa-solid fa-venus"></i>
    </div>
  </div>

  <div class="card mainContentRight content-size">

  </div>
</div>
</div>

@include('footer')
