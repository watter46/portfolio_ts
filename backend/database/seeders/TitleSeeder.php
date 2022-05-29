<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Todo\Title;


class TitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i < 5; $i++) {
            Title::create([
                'title_position' => $i * 1024,
                'title' => "タイトル" . $i
            ]);
        }
    }
}
