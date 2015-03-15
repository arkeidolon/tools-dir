<?php

class Notification extends Eloquent {
	protected $fillable = [
		'unread', 'receiver_id', 'vote_id', 'view_id',
		'download_id', 'comment_id', 'updated_at'
	];

	protected $appends = ['user_id', 'tool_id'];

	public function getUserIdAttribute()
	{
		if($this->vote_id != 0)
			return $this->vote()->user_id;
		if($this->view_id != 0)
			return $this->view()->user_id;
		if($this->download_id != 0)
			return $this->download()->user_id;
		if($this->comment_id != 0)
			return $this->comment()->user_id;
	}
	public function getToolIdAttribute()
	{
		if($this->vote_id != 0)
			return $this->vote()->tool_id;
		if($this->view_id != 0)
			return $this->view()->tool_id;
		if($this->download_id != 0)
			return $this->download()->tool_id;
		if($this->comment_id != 0)
			return $this->comment()->tool_id;
	}
	public function receiver()
	{
		return $this->belongsTo('User');
	}
	public function vote()
	{
		return DB::table('votes')->find($this->vote_id);
	}
	public function view()
	{
		return DB::table('views')->find($this->view_id);
	}
	public function download()
	{
		return DB::table('downloads')->find($this->download_id);
	}
	public function comment()
	{
		return DB::table('comments')->find($this->comment_id);
	}
}
