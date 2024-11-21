from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Income
from .models import Expense

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


    