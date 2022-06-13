<?php

namespace App\Http\Requests\Todo\Title;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
        if (!$this->has('updatePositionList')) {
            $rules = [];
            if ($this->has('id')) $rules['id'] = 'required|integer';
            if ($this->has('title')) $rules['title'] = 'required|string';
            if ($this->has('title_position')) $rules['title_position'] = 'required|integer';

            return $rules;
        }

        if ($this->has('updatePositionList')) {
            return [
                'updatePositionList.*.id' => 'required|integer',
                'updatePositionList.*.title' => 'required|string',
                'updatePositionList.*.title_position' => 'required|integer'
            ];
        }
    }
}
