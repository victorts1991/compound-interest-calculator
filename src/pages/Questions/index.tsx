import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, SubContainer, QuestionContainer, Question, AnswerContainer, Answer, AdContainer } from './styles'
import { Header } from '../../components/Header'
import { BannerAdMob } from '../../components/BannerAdMob'

export function Questions () {

    const [openQuestion, setOpenQuestion] = useState(0)

    function handleOpenQuestion(key: number) {
        setOpenQuestion(openQuestion === key ? 0 : key)
    }

    return (
        <Container>
            <Header title="Dúvidas" />
            <SubContainer>
                <QuestionContainer testID={'question-1'} activeOpacity={1} onPress={() => handleOpenQuestion(1)}>
                    <Question>O que são juros?</Question>
                    <MaterialCommunityIcons name={openQuestion === 1 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 1 && 
                   <AnswerContainer testID={'answer-1'}>
                        <Answer>Juros são a contrapartida de emprestar dinheiro (ou outro item) a uma pessoa ou instituição. Eles são representados por um percentual sobre o valor total e podem ser calculados de forma simples ou composta. É uma espécie de cobrança de aluguel. Ou seja, o tomador do empréstimo recebe uma soma que poderá destinar ao uso que lhe convier.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>Enquanto isso, o credor ganha um rendimento por não dispor desse valor para utilização até recebê-lo de volta e pelo risco de calote, que ocorre quando a pessoa ou instituição que contraiu a dívida não a quita. Em termos práticos, quando você compra um título do Tesouro Direto, por exemplo, você está investindo na dívida do governo. O governo se financia dessa forma: como ele é um bom pagador, ele toma o seu dinheiro e o premia com juros mensais compostos.</Answer>
                        <Answer>Dessa forma, deixar de usar esse dinheiro agora na compra de uma televisão nova, digamos, tem uma vantagem: daqui a algum tempo, essa economia poderá lhe render duas televisões, por exemplo, por causa da incidência dos juros.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-2'} activeOpacity={1} onPress={() => handleOpenQuestion(2)}>
                    <Question>Quais as diferenças entre juros simples e juros compostos</Question>
                    <MaterialCommunityIcons name={openQuestion === 2 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 2 && 
                   <AnswerContainer testID={'answer-2'}>
                        <Answer>A diferença básica entre juros simples e juros compostos é a base de cálculo da taxa. Nos juros simples, a taxa é cobrada sobre o valor inicial. Nos juros compostos, a taxa é cobrada sobre o valor do último mês.</Answer>
                        <Answer>Ou seja, nesse último caso, o valor cresce muito mais rápido. É o que se chama de juros sobre juros.</Answer>
                        <Answer>Vamos a um exemplo de um empréstimo de R$ 10 mil, considerando uma taxa mensal de 1%.</Answer>
                        <Answer>No caso dos juros simples, o valor devido aumenta em R$ 100,00 (1% de R$ 10.000,00) a cada mês. Em 12 meses, o valor total será de R$ 11.200,00.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>No caso dos juros compostos, o valor devido aumenta em R$ 100 no primeiro mês (1% de R$ 10.000,00), R$ 101 no segundo mês (1% de R$ 10.100,00), R$ 102,01 no terceiro mês (1% de R$ 10.201,00) e assim sucessivamente. Em 12 meses, o valor total será de R$ 11.268,25.</Answer>
                        <Answer>Percebeu a diferença? O valor cresce muito mais rápido com os juros compostos. E é com eles que você pode contar para fazer seu patrimônio render com os investimentos certos.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-3'} activeOpacity={1} onPress={() => handleOpenQuestion(3)}>
                    <Question>Quais os benefícios e perigos dos juros compostos?</Question>
                    <MaterialCommunityIcons name={openQuestion === 3 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 3 && 
                   <AnswerContainer testID={'answer-3'}>
                        <Answer>Os juros compostos são aqueles nos quais os juros do mês são incorporados ao capital. Com uma taxa assim, o valor cresce muito mais rápido do que com juros simples. No caso de uma dívida, é perigoso. No caso de um investimento, é excelente, pois seu patrimônio irá crescer muito mais.</Answer>
                        <Answer>Em ambos os casos, de dívida e investimento em instituições financeiras, os juros calculado é sempre o composto.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>As faturas do cartão de crédito que você não conseguiu pagar por completo naqueles meses, lembra? Viu como o valor aumentou muito de um mês para o outro? Esse é o juro composto que atrapalha a sua vida financeira.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-4'} activeOpacity={1} onPress={() => handleOpenQuestion(4)}>
                    <Question>Como os juros funcionam para te deixar mais rico?</Question>
                    <MaterialCommunityIcons name={openQuestion === 4 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 4 && 
                   <AnswerContainer testID={'answer-4'}>
                        <Answer>Você pode ter experiências boas ou ruins com os juros. Caso contraia dívidas, você pode afundar em um lamaçal de juros compostos que colocarão em risco muito do seu trabalho duro.</Answer>
                        <Answer>Mas caso lide com cuidado com seu dinheiro e invista suas reservas em investimentos vantajosos, os juros compostos serão os responsáveis por deixar você em melhor situação financeira no futuro.</Answer>
                        <Answer>Como explicado nas respostas ali em cima, os juros compostos são aqueles que incidem sobre o valor atualizado mês a mês, que no final das contas terá uma valorização exponencial.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>Em outras respostas abaixo, temos exemplos de como usar esse instrumento financeiro para ter um futuro mais tranquilo para você e sua família.</Answer>
                        <Answer>Para isso, um aviso desde já: você precisa começar a separar um valor mensal, mesmo que seja pequeno, e aplicá-lo rigorosamente todo mês.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-5'} activeOpacity={1} onPress={() => handleOpenQuestion(5)}>
                    <Question>Você já ouviu falar em pessoas que vivem de renda ou vivem de juros?</Question>
                    <MaterialCommunityIcons name={openQuestion === 5 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 5 && 
                   <AnswerContainer testID={'answer-5'}>
                        <Answer>Bom, esses são os juros compostos em prática.</Answer>
                        <Answer>Mês a mês, por muito tempo, esses investidores destinaram parte de suas reservas para ativos dentro de sua carteira de investimentos, como títulos do Tesouro Direto, ações ou até cotas em fundos de investimentos.</Answer>
                        <Answer>Isso se deve ao poder dos juros compostos, que vão multiplicando o seu dinheiro com força cada vez maior.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>É fácil entender: quanto mais tempo de investimento, maior o volume de recursos; quanto maior o volume de recursos, maior diferença faz aquela taxa percentual.</Answer>
                        <Answer>Você pode fazer algumas simulações neste app para entender melhor o poder disso.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-6'} activeOpacity={1} onPress={() => handleOpenQuestion(6)}>
                    <Question>É interessante começar a investir cedo?</Question>
                    <MaterialCommunityIcons name={openQuestion === 6 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 6 && 
                   <AnswerContainer testID={'answer-6'}>
                        <Answer>O principal motivo para as pessoas não investirem desde cedo é que elas pensam que não dispõem de dinheiro suficiente para começar. E esse é o seu maior erro: sempre dá para começar a economizar um pouquinho e destinar parte das economias para investimentos.</Answer>
                        <Answer>Mesmo que você comece com R$ 100,00 ou R$ 200,00, é importante aplicar uma disciplina de economia o quanto antes para que os juros compostos possam trabalhar por você.</Answer>
                        <Answer>É impressionante a diferença que eles fazem em um período longo de tempo. E é assustador como o tempo passa rápido: se você não se mexer agora, vai se arrepender em breve.</Answer>
                        <Answer>Por exemplo, se você aportar R$300,00 todo mês, desde os 18 anos considerando uma taxa de juros conservadora de 0,5% ao mês, quando fizer 50 anos terá um total de R$347.304,28.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>Agora caso você aporte R$400,00 por mês, começando a partir dos 30 anos, utilizando a mesma taxa de juros conservadora como exemplo anterior, quando fizer 50 anos terá um total de R$184.816,36.</Answer>
                        <Answer>Viu como o tempo faz diferença, mesmo aportando mais por ter começado depois o último exemplo acumulou menos dinheiro que o primeiro.</Answer>
                        <Answer>Você pode fazer quantas simulações quiser neste app, o intuito é te ajudar no planejamento do seu futuro.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-7'} activeOpacity={1} onPress={() => handleOpenQuestion(7)}>
                    <Question>Quais investimentos utilizam juros compostos?</Question>
                    <MaterialCommunityIcons name={openQuestion === 7 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 7 && 
                   <AnswerContainer testID={'answer-7'}>
                        <Answer>Todos os investimentos disponíveis no mercado financeiro de renda fixa utilizam juros compostos. Podemos citar CDB (Certificado de Depósito Bancário), LCI (Letra de Crédito Imobiliário), LCA (Letra de Crédito do Agronegócio), Tesouro Direto, poupança, entre outros.</Answer>
                        <Answer>A bolsa de valores, embora não pague juros diretamente sobre os investimentos (em ações, por exemplo) também oferece retornos compostos, e não simples.</Answer>
                        <Answer>Uma observação importante recai sobre a poupança, que oferece rendimentos compostos de uma maneira bastante peculiar.</Answer>
                        <Answer>Em vez de remunerar o investimento diariamente (como muitos imaginam), a aplicação paga o rendimento apenas uma vez por mês, no aniversário do depósito.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                        <Answer>Isso significa que um investidor desavisado pode sacar toda a sua poupança de uma hora para a outra sem perceber que os juros do último mês seriam creditados apenas no dia seguinte.</Answer>
                        <Answer>De qualquer forma, o que é importante ficar claro é que todos os investimentos oferecem juros compostos, que beneficiam a aplicação no longo prazo. Quanto mais tempo você deixar seu dinheiro rendendo, melhor.</Answer>
                        <Answer>Mas é bom fazer isso conforme uma estratégia de investimentos que considere aplicações diversificadas, tanto em renda fixa quanto em renda variável.</Answer>
                        <Answer>Nada aqui é recomendação de compra ou venda, o intuito é apenas explicar que todo investimendo possui valorização de forma direta ou indireta com juros compostos.</Answer>
                    </AnswerContainer>
                }

                <QuestionContainer testID={'question-8'} activeOpacity={1} onPress={() => handleOpenQuestion(8)}>
                    <Question>Como calcular juros compostos usando este app?</Question>
                    <MaterialCommunityIcons name={openQuestion === 8 ? "minus" : "plus"} color={'white'} size={40} />
                </QuestionContainer>
                {
                   openQuestion === 8 && 
                   <AnswerContainer testID={'answer-8'}>
                        <Answer>Basta ir na primeira aba, definir um valor inicial, a quantidade que pretende aportar por mês, definir um valor de juros mensal ou anual, inserir com quantos meses ou anos deseja que a simulação seja feita.</Answer>
                        <Answer>Após isso é só apertar o botão "Calcular" e o aplicativo irá exibir quanto você teria investido no período, qual foi o valor de juros que você ganhou, o total acumulado, e qual o valor de rendimento de juros do último mês.</Answer>
                        <AdContainer>
                            <BannerAdMob />
                        </AdContainer>
                    </AnswerContainer>
                }
            </SubContainer>
        </Container>
    )
}  