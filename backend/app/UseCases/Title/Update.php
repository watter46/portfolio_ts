<?php

namespace App\UseCases\Title;

Use App\Models\Todo\Title;


class Update
{
    public function __invoke(array $data): void
    {
        if (array_key_exists('id', $data)) {
            Title::where('id', $data['id'])->update($data);
        }
        else {
            $bulkArray = $data['newList'];

            Title::UpdateBulk($bulkArray);
        }
        
    }
}
