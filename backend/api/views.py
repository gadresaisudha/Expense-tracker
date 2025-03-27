from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics,viewsets
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import IncomeSerializer,ExpenseSerializer,CreditCardSerializer
from .models import Expense,Income,Creditcard

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ExpenseListCreate(generics.ListCreateAPIView):
    serializer_class = ExpenseSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Expense.objects.filter(expense_author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(expense_author=self.request.user)
        else:
            print(serializer.errors)


class ExpenseDelete(generics.DestroyAPIView):
    serializer_class = ExpenseSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Expense.objects.filter(expense_author=user)


class IncomeListCreate(generics.ListCreateAPIView):
    serializer_class=IncomeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(income_author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(income_author = self.request.user)
        else:
            print(serializer.errors)

class IncomeDelete(generics.DestroyAPIView):
    serializer_class = IncomeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(income_author=user)

class CreditCardView(viewsets.ModelViewSet):
    serializer_class = CreditCardSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Creditcard.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        return
