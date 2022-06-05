<?php

namespace App\UseCases\Title;

Use App\Models\Todo\Title;

class Destroy
{
    public function __invoke(array $data): void
    {
        Title::destroy($data['id']);
    }
}
