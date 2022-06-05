<?php

namespace App\Http\Requests\Todo\Task;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
    * バリーデーションのためにデータを準備
    *
    * @return void
    */
    protected function prepareForValidation()
    {
        $this->merge([
            'done' => false,
            'is_showing' => false
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title_id' => 'required|integer',
            'task' => 'required|string',
            'done' => 'required|boolean',
            'is_showing' => 'required|boolean',
            'task_position' => 'required|integer'
        ];
    }
}
