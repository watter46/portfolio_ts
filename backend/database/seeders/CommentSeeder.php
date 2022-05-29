<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Todo\Comment;


class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 3; $i++) {
            Comment::create([
                'task_id' => $i,
                'comment_position' => $i * 1024,
                'comment' => "コメント" . $i
            ]);
        }
    }
}
