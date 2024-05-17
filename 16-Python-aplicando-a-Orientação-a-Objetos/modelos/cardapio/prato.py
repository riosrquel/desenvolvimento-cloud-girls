from modelos.cardapio.item_cardapio import ItemCardapio 

class Prato(ItemCardapio): #incluindo o prato como filho do item cardapio
    def __init__(self,nome,preco,descricao):
        super().__init__(nome,preco) #super é um objeto especial que o python que permite que ele acesse informaçõesde outra classe
        self._descricao = descricao  
    
    def __str__(self):
        return self._nome
    
    def aplicar_desconto(self):
        self._preco -= (self._preco*0.08)