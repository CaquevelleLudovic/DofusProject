<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="../asset/css/style.css">
    <link rel="stylesheet" href="../asset/css/main.css">

    <title>Dofus</title>

</head>
<body>

<!------------------------------ NAVBAR ------------------------------>
    <div class="d-flex justify-content-center navbar bg-dark" id="NavBar">

        <ul class="nav d-flex text-center">
            <?php foreach ($character as $characters) :?>

            <li class="nav-item m-2">
            <a href="../character/{{$characters->id}}"><img src="../asset/img/logo/logo-{{ $characters->name }}.png" class="rounded mx-auto d-block " alt="..."style="height: 4rem; width: 4rem;"></a>
            </li>

            <?php endforeach?>

        </ul>

    </div>


