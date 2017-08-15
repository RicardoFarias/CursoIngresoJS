#include <stdio.h>
#include <stdlib.h>

int main()
{
    int entero;
    float flotante=3.29;
    char caracter='m';

    printf("ingrese un entero\n");
    scanf("%d",&entero);
    printf("el entero es:%d\n",entero);

    printf("ingrese un flotante\n");
    scanf("%f",&flotante);
    printf("el flotante es:%f\n",flotante);

    printf("ingrese un caracter:\n");
    caracter=getch();
    printf("el caracter es:%c",caracter);


    return 0;
}
