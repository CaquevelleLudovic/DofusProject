<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class CharacterController extends Controller
{
    public function list(): View
    {
        $character = DB::select('select * from characters');
        return view('home',[
            'character' => $character
        ]);
    }

    public function show($id): View
    {
        $character = DB::select('select * from characters');
        $characterId = DB::select('select * from characters where id = '. $id);
        return view('character',[
            'characterId' => $characterId,
            'character' => $character
        ]);
    }
}
