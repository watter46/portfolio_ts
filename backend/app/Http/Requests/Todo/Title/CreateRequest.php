<?php

namespace App\Http\Requests\Todo\Title;

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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'id' => 'required|integer',
            'title_position' => 'required|integer',
            'title' => 'required|string',
            // 'tasks' => 'array'
        ];
    }
}
