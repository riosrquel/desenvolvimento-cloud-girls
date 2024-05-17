from abc import ABC, abstractmethod
class ItemCardapio(ABC):
    def __init__(self,nome,preco): #aqui temos o contrutor#
        self._nome = nome    #associação ao objeto
        self._preco = preco
    
    @abstractmethod
    def aplicar_desconto(self,):
        pass