<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Todo\Task;


class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 5; $i++) {
            Task::create([
                'title_id' => 1,
                'task_position' => $i * 1024,
                'done' => false,
                'is_showing' => false,
                'task' => "タスク" . $i
            ]);
        }
    }
}
