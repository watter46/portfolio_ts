<?php

namespace App\UseCases\Title;

use App\Http\Resources\Todo\Title\UpdateResource;
Use App\Models\Todo\Title;


class Update
{
    public function __invoke(array $data)
    {
        Title::where('id', $data['id'])->update($data);

        $data = Title::find($data['id']);

        return new UpdateResource($data);

        // if (array_key_exists('id', $data)) {
        //     Title::where('id', $data['id'])->update($data);
        // }
        // else {
        //     $bulkArray = $data['newList'];

        //     Title::UpdateBulk($bulkArray);
        // }
    }
}
