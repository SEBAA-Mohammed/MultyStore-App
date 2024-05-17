<?php

namespace App\Models;

use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'barcode',
        'designation',
        'prix_ht',
        'tva',
        'description',
        'stock',
        'rating',
        'category_id',
        'brand_id',
        'unit_id',
        'paddle_product_id',
        'paddle_price_id',
        'store_id'
    ];

    public function orderDetails(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    protected function getPriceTTCAttribute(): int
    {
        $price_with_tax = round($this->prix_ht * (1 + $this->tva), 2);
        return $this->unroundPrice($price_with_tax);
    }

    private function unroundPrice($price): int
    {
        $price_without_decimal = str_replace('.', '', $price);
        return $price_without_decimal * 100;
    }
}
