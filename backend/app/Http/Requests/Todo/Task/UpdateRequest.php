<?php

namespace App\Http\Requests\Todo\Task;

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
            if ($this->has('title_id')) $rules['title_id'] = 'required|integer';
            if ($this->has('task')) $rules['task'] = 'required|string';
            if ($this->has('done')) $rules['done'] = 'required|boolean';
            if ($this->has('is_showing')) $rules['is_showing'] = 'required|boolean';
            if ($this->has('task_position')) $rules['task_position'] = 'required|integer';

            return $rules;
        }

        if ($this->has('updatePositionList')) {
            return [
                'updatePositionList.*.id' => 'required|integer',
                'updatePositionList.*.task' => 'required|string',
                'updatePositionList.*.task_position' => 'required|integer'
            ];
        }
    }
}
