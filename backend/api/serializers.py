from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Income,Expense,Creditcard

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password','email']
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id','income_date','income_source','income_author','income_amount','income_payment_method','income_category']
        extra_kwargs = {'income_author':{'read_only': True}}

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id','expense_item','purchased_date','expense_amount','expense_category','expense_author','expense_payment_method']
        extra_kwargs = {'expense_author':{'read_only': True}}

class CreditCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creditcard
        fields = ['id','user','name','last_four_digits','bank_name','credit_limit','available_balance','due_date','created_at']
        extra_kwargs = {'created_at':{'read_only':True}}
