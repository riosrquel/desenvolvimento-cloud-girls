import os
'''Exercícios
1 - Solicite ao usuário que insira um número e, em seguida, use uma estrutura if else para determinar se o número é par ou ímpar. 
def numero():
    numero = int(input('Digite um número: '))
    
    if numero % 2 == 0:
        print("O número", numero, "é par.")
    else:
        print("O número", numero, "é ímpar.")

def main():
    numero()

if __name__ == '__main__':
    main() '''     


'''2 - Pergunte ao usuário sua idade e, com base nisso, use uma estrutura if elif else para classificar a idade em categorias de acordo com as seguintes condições:'''
'''
idade = int(input('Digite a sua idade: '))
if 0 < idade <= 12:
    print('Você é uma criança')
elif 12 < idade < 18:
    print('Você é um adolencente')
elif idade > 18:
    print('Você é um adulto e sim, tudo é caro demais!')
else:
    print('Valor inválido')'''

'''3 - Solicite um nome de usuário e uma senha e use uma estrutura if else para verificar se o nome de usuário e a senha fornecidos correspondem aos valores esperados determinados por você.''' 

'''usuario = (input('Digite o ID do usuário: '))
senha = (input('Digite a senha: '))

if usuario == 'riosrquel':
    print('Correto')
elif senha == opxcv:
    print('Login, aguarde')
else:
    print('Tente novamente')  '''      

'''
usuario_correto = "alura"
senha_correta = "alura123"

usuario = input("Digite o nome de usuário: ")
senha = input("Digite a senha: ")

if usuario == usuario_correto and senha == senha_correta:
    print("Login bem sucedido!")
else:
    print("Credenciais inválidas. Tente novamente.")'''

'''4 - Solicite ao usuário as coordenadas (x, y) de um ponto qualquer e utilize uma estrutura if elif else para determinar em qual quadrante do plano cartesiano o ponto se encontra de acordo com as seguintes condições:

Primeiro Quadrante: os valores de x e y devem ser maiores que zero;
Segundo Quadrante: o valor de x é menor que zero e o valor de y é maior que zero;
Terceiro Quadrante: os valores de x e y devem ser menores que zero;
Quarto Quadrante: o valor de x é maior que zero e o valor de y é menor que zero;
Caso contrário: o ponto está localizado no eixo ou origem.'''

x = float(input("Digite a coordenada x: "))
y = float(input("Digite a coordenada y: "))

if x > 0 and y > 0:
    print("O ponto está no primeiro quadrante.")
elif x < 0 and y > 0:
    print("O ponto está no segundo quadrante.")
elif x < 0 and y < 0:
    print("O ponto está no terceiro quadrante.")
elif x > 0 and y < 0:
    print("O ponto está no quarto quadrante.")
else:
    print("O ponto está sobre um eixo ou na origem.")
