<?php

namespace App\Http\Requests\Todo\Comment;

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
            if ($this->has('task_id')) $rules['task_id'] = 'required|integer';
            if ($this->has('comment')) $rules['comment'] = 'required|string';
            if ($this->has('comment_position')) $rules['comment_position'] = 'required|integer';

            return $rules;
        }

        if ($this->has('updatePositionList')) {
            return [
                'updatePositionList.*.id' => 'required|integer',
                'updatePositionList.*.task_id' => 'required|integer',
                'updatePositionList.*.comment' => 'required|string',
                'updatePositionList.*.comment_position' => 'required|integer'
            ];
        }
    }
}
