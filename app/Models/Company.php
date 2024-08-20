<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Multitenancy\Contracts\IsTenant;
use Spatie\Multitenancy\Models\Concerns\ImplementsTenant;
use Spatie\Multitenancy\Models\Concerns\UsesLandlordConnection;

class Company extends Model implements IsTenant
{
    use UsesLandlordConnection;
    use ImplementsTenant;
    use HasFactory;

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
