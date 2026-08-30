const SITE_CONFIG = {
    "nome": "Claudio de Lima Firmino",
    "slogan": "Excelência jurídica com compromisso e dedicação",
    "descricao": "Escritório de advocacia especializado em soluções jurídicas personalizadas, com atuação ética e transparente.",
    "cores": {
        "gradientePrincipal": "linear-gradient(135deg, #0B3D2E 0%, #1E7A5A 50%, #2D9B6E 100%)",
        "gradienteDestaque": "linear-gradient(135deg, #B45309 0%, #D97706 50%, #F59E0B 100%)",
        "fundoClaro": "#F7F5F0",
        "textoEscuro": "#1B3A5C",
        "textoMedio": "#5A6570",
        "textoClaro": "#FFFFFF"
    },
    "imagens": {
        "hero": "imagens/Hero.jpg",
        "sobre": "imagens/Sobre.jpg",
        "contato": "imagens/Contato.jpg"
    },
    "redesSociais": {
        "whatsapp": {
            "ativo": true,
            "numero": "5511954556168",
            "mensagem": "Ola! Gostaria de mais informações sobre seus serviços."
        },
        "instagram": {
            "ativo": true,
            "url": "https://www.instagram.com/claudiofirminoofc/"
        },
        "facebook": {
            "ativo": true,
            "url": "https://facebook.com/seu_escritorio"
        },
        "linkedin": {
            "ativo": true,
            "url": "https://linkedin.com/company/seu_escritorio"
        }
    },
    "equipe": {
        "titulo": "Nossa Equipe",
        "subtitulo": "Profissionais dedicados a defender seus direitos",
        "advogados": [
            {
                "nome": "Dr. Claudio Firmino",
                "oab": "OAB/SP 234.567",
                "especialidade": "Direito Civil",
                "bio": "Atuação em contratos, responsabilidade civil e direito de família, com abordagem humanizada.",
                "foto": "imagens/advogado2.jpeg"
            }
        ]
    },
    "formulario": {
        "endpointFormspree": "https://formspree.io/f/mqpkezgk",
        "campos": [
            {
                "nome": "nome",
                "label": "Nome completo",
                "tipo": "text",
                "obrigatorio": true
            },
            {
                "nome": "email",
                "label": "E-mail",
                "tipo": "email",
                "obrigatorio": true
            },
            {
                "nome": "telefone",
                "label": "Telefone",
                "tipo": "tel",
                "obrigatorio": true
            },
            {
                "nome": "assunto",
                "label": "Area de interesse",
                "tipo": "select",
                "obrigatorio": true,
                "opcoes": [
                    "Direito Criminal",
                    "Direito Civil",
                    "Direito do Consumidor",
                    "Direito Trabalhista",
                    "Direito Previdenciario",
                    "Outro"
                ]
            },
            {
                "nome": "mensagem",
                "label": "Descreva brevemente seu caso",
                "tipo": "textarea",
                "obrigatorio": true
            }
        ]
    },
    "lgpd": {
        "cpf": "256.667.308-00",
        "oab": "OAB/SP 234.567",
        "email": "contato@claudiofirmino.adv.br"
    },
    "rotativoInformativo": [
        "Direito Criminal",
        "Direito Civil",
        "Direito do Consumidor",
        "Direito Trabalhista",
        "Direito Previdenciário"
    ],
    "secoes": {
        "areas": window.SITE_AREAS,
        "home": {
            "titulo": "Bem-vindo ao nosso escritório",
            "subtitulo": "Soluções jurídicas com excelência e transparência",
            "botaoTexto": "Conheça nosso trabalho"
        },
        "sobre": {
            "titulo": "Firmino Advocacia",
            "texto": "Nascemos com o proposito de oferecer serviços jurídicos de alta qualidade, pautados pela ética, transparência e compromisso com os resultados."
        },
        "informativo": {
            "titulo": "Seus Direitos",
            "subtitulo": "Conheça seus direitos e saiba como protege-los",
            "itens": [
                {
                    "titulo": "Direito a Informação",
                    "descricao": "Você tem direito a informações claras e adequadas sobre produtos e serviços, incluindo preços, características e riscos."
                },
                {
                    "titulo": "Direito a Segurança",
                    "descricao": "Produtos e serviços não podem oferecer riscos a sua saúde ou segurança. Se houver defeito, o fornecedor e responsável."
                },
                {
                    "titulo": "Direito de Arrependimento",
                    "descricao": "Em compras online ou fora do estabelecimento comercial, você tem 7 dias para desistir da compra sem justificativa."
                },
                {
                    "titulo": "Direito a Qualidade",
                    "descricao": "Produtos e serviços devem atender as expectativas legitimas e as informações fornecidas pelo fornecedor."
                }
            ]
        },
        "contato": {
            "titulo": "Entre em Contato",
            "endereco": "Rua Jean de La Huerta,808 - Sao Paulo - SP",
            "telefone": "(11) 912760180",
            "email": "contato@firminoadv.com.br",
            "horario": "Segunda a Sexta, 9h as 18h"
        }
    }
};
window.SITE_CONFIG = SITE_CONFIG;
