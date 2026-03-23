"""
Time Saving Tech - Lead Magnet PDF Generator
Generates a professional dark-themed A4 PDF guide:
"10 Processos que Toda PME Pode Automatizar Hoje"

Design system matches the company pitch deck.
Uses ReportLab for PDF generation.
"""

import os
import sys

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ============================================================
# FONT REGISTRATION
# ============================================================

FONT_BODY = 'Helvetica'
FONT_BODY_BOLD = 'Helvetica-Bold'
FONT_MONO = 'Courier'

# Try to register Calibri; fall back to Helvetica if not available
CALIBRI_PATHS = [
    r'C:\Windows\Fonts\calibri.ttf',
    r'C:\Windows\Fonts\calibrib.ttf',
    r'C:\Windows\Fonts\calibril.ttf',
    r'/usr/share/fonts/truetype/msttcorefonts/calibri.ttf',
    r'/Library/Fonts/calibri.ttf',
]

try:
    # Try standard Windows path first
    calibri_regular = r'C:\Windows\Fonts\calibri.ttf'
    calibri_bold = r'C:\Windows\Fonts\calibrib.ttf'
    calibri_light = r'C:\Windows\Fonts\calibril.ttf'

    if os.path.exists(calibri_regular):
        pdfmetrics.registerFont(TTFont('Calibri', calibri_regular))
        FONT_BODY = 'Calibri'

    if os.path.exists(calibri_bold):
        pdfmetrics.registerFont(TTFont('Calibri-Bold', calibri_bold))
        FONT_BODY_BOLD = 'Calibri-Bold'
    elif FONT_BODY == 'Calibri':
        # If we have regular but not bold, use regular for bold too
        FONT_BODY_BOLD = 'Calibri'

    if os.path.exists(calibri_light):
        pdfmetrics.registerFont(TTFont('Calibri-Light', calibri_light))

    if FONT_BODY == 'Calibri':
        print(f"  Font: Calibri loaded successfully")
    else:
        print(f"  Font: Calibri not found, using Helvetica fallback")
except Exception as e:
    print(f"  Font: Could not load Calibri ({e}), using Helvetica fallback")
    FONT_BODY = 'Helvetica'
    FONT_BODY_BOLD = 'Helvetica-Bold'


# ============================================================
# DESIGN SYSTEM
# ============================================================

PAGE_W, PAGE_H = A4  # 595.27 x 841.89 points

COLORS = {
    'bg_dark':      (0x0A/255, 0x0A/255, 0x0F/255),    # #0a0a0f
    'bg_darker':    (0x05/255, 0x05/255, 0x08/255),     # #050508
    'card':         (0x12/255, 0x12/255, 0x1A/255),     # #12121a
    'border':       (0x1E/255, 0x1E/255, 0x2E/255),     # #1e1e2e
    'cyan':         (0x00/255, 0xD4/255, 0xFF/255),     # #00d4ff
    'cyan_dark':    (0x00/255, 0xA8/255, 0xCC/255),     # #00a8cc
    'purple':       (0x7C/255, 0x3A/255, 0xED/255),     # #7c3aed
    'gray':         (0x8B/255, 0x8B/255, 0x9E/255),     # #8b8b9e
    'white':        (0xF8/255, 0xFA/255, 0xFC/255),     # #f8fafc
    'text_body':    (0xC4/255, 0xC4/255, 0xD4/255),     # #c4c4d4
    'text_light':   (0xE4/255, 0xE4/255, 0xE7/255),    # #e4e4e7
    'green':        (0x22/255, 0xC5/255, 0x5E/255),     # #22c55e
    'orange':       (0xF5/255, 0x9E/255, 0x0B/255),     # #f59e0b
}

# Margins
MARGIN_LEFT = 30 * mm
MARGIN_RIGHT = 30 * mm
MARGIN_TOP = 25 * mm
MARGIN_BOTTOM = 20 * mm
CONTENT_W = PAGE_W - MARGIN_LEFT - MARGIN_RIGHT


# ============================================================
# CONTENT DATA
# ============================================================

PROCESSES = [
    {
        'num': '01',
        'icon': '>>>',
        'title': 'Notificacoes automaticas de entrega e atendimento',
        'problem': 'Cliente faz pedido e fica sem resposta ate alguem ver manualmente.',
        'solution': 'Trigger automatico via WhatsApp/email no momento do evento.',
        'tools': ['n8n', 'WhatsApp API'],
        'savings': '2-4h/semana por atendente',
        'case_real': 'Port-Go - porteiro registra entrega, morador recebe WhatsApp automatico.',
    },
    {
        'num': '02',
        'icon': '[+]',
        'title': 'Agendamento e gestao de eventos/reservas',
        'problem': 'Inscricoes via formulario generico + controle manual em planilha.',
        'solution': 'Site self-service com fluxo completo de pagamento e confirmacao.',
        'tools': ['React', 'Google Sheets API', 'n8n'],
        'savings': '3-5h/semana operacional',
        'case_real': 'Ronron Cat Cafe - Google Sheets virou o painel admin.',
    },
    {
        'num': '03',
        'icon': '(i)',
        'title': 'Registro e analise alimentar com IA',
        'problem': 'Apps tradicionais tem alta friccao, equipe de nutricao sem visibilidade dos pacientes.',
        'solution': 'Registro por voz com IA calculando macros automaticamente.',
        'tools': ['Claude AI', 'Whisper', 'n8n', 'Supabase'],
        'savings': '15min/refeicao por paciente',
        'case_real': 'FalaFit - registro de refeicao por voz com IA.',
    },
    {
        'num': '04',
        'icon': '</>',
        'title': 'Prospeccao e pesquisa de leads B2B',
        'problem': 'Time comercial gasta horas pesquisando empresas manualmente.',
        'solution': 'Agente de IA pesquisa, qualifica e gera dossie + email personalizado por lead.',
        'tools': ['Claude AI', 'n8n', 'Web Search'],
        'savings': '4-8h/semana do time comercial',
        'case_real': None,
    },
    {
        'num': '05',
        'icon': '[*]',
        'title': 'Onboarding de clientes',
        'problem': 'Processo de boas-vindas manual, documentos enviados um a um.',
        'solution': 'Fluxo automatizado - contrato, boas-vindas, acesso a sistemas e follow-up.',
        'tools': ['n8n', 'Google Drive', 'WhatsApp API'],
        'savings': '1-2h por novo cliente',
        'case_real': None,
    },
    {
        'num': '06',
        'icon': '[=]',
        'title': 'Relatorios e dashboards automaticos',
        'problem': 'Gestor pede relatorio, alguem para o que esta fazendo para montar no Excel.',
        'solution': 'Dashboard atualizado em tempo real, relatorio enviado automaticamente toda semana.',
        'tools': ['Power BI', 'SQL Server', 'Power Automate'],
        'savings': '3-6h/semana de analista',
        'case_real': None,
    },
    {
        'num': '07',
        'icon': '[@]',
        'title': 'Triagem e resposta de emails',
        'problem': 'Caixa de entrada com centenas de emails, triagem manual, respostas repetitivas.',
        'solution': 'Agente de IA classifica, prioriza e sugere (ou envia) respostas padrao.',
        'tools': ['Claude AI', 'n8n', 'Gmail API'],
        'savings': '1-2h/dia',
        'case_real': None,
    },
    {
        'num': '08',
        'icon': '{?}',
        'title': 'Base de conhecimento com IA (RAG)',
        'problem': 'Equipe perde tempo procurando informacao em documentos, manuais e PDFs.',
        'solution': 'Chatbot interno que responde perguntas consultando toda a base documental.',
        'tools': ['Claude AI', 'Supabase Vector', 'n8n'],
        'savings': '20-40min/dia por colaborador',
        'case_real': 'BBL Advogados - compliance assistant interno.',
    },
    {
        'num': '09',
        'icon': '[#]',
        'title': 'Gestao de contratos e documentos juridicos',
        'problem': 'Contratos criados manualmente, revisao demorada, vencimentos perdidos.',
        'solution': 'Geracao automatica de contratos por template + alertas de vencimento.',
        'tools': ['n8n', 'Google Docs API', 'Claude AI'],
        'savings': '2-4h/semana juridico',
        'case_real': None,
    },
    {
        'num': '10',
        'icon': '<~>',
        'title': 'Integracao entre sistemas legados',
        'problem': 'Dados em 3 sistemas diferentes que nao conversam - ERP, CRM, planilha.',
        'solution': 'Middleware de integracao que sincroniza dados em tempo real sem intervencao humana.',
        'tools': ['n8n', 'APIs REST', 'Webhooks'],
        'savings': 'Elimina retrabalho de entrada manual de dados',
        'case_real': None,
    },
]


# ============================================================
# HELPER FUNCTIONS
# ============================================================

def draw_page_bg(c, color):
    """Fill the entire page with a solid background color."""
    c.setFillColorRGB(*color)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def draw_accent_line(c, x, y, width, color=None, thickness=3):
    """Draw a horizontal accent line."""
    if color is None:
        color = COLORS['cyan']
    c.setStrokeColorRGB(*color)
    c.setLineWidth(thickness)
    c.line(x, y, x + width, y)


def draw_rounded_rect(c, x, y, w, h, radius=8, fill_color=None, stroke_color=None, stroke_width=1):
    """Draw a rounded rectangle with optional fill and stroke."""
    c.saveState()
    if fill_color:
        c.setFillColorRGB(*fill_color)
    if stroke_color:
        c.setStrokeColorRGB(*stroke_color)
        c.setLineWidth(stroke_width)

    fill = 1 if fill_color else 0
    stroke = 1 if stroke_color else 0
    c.roundRect(x, y, w, h, radius, fill=fill, stroke=stroke)
    c.restoreState()


def draw_card(c, x, y, w, h, fill_color=None, border_color=None, radius=8):
    """Draw a card-style rounded rectangle."""
    if fill_color is None:
        fill_color = COLORS['card']
    if border_color is None:
        border_color = COLORS['border']
    draw_rounded_rect(c, x, y, w, h, radius, fill_color=fill_color, stroke_color=border_color)


def draw_text(c, x, y, text, font=None, size=12, color=None, bold=False):
    """Draw a single line of text."""
    if font is None:
        if bold:
            font = FONT_BODY_BOLD
        else:
            font = FONT_BODY
    if color is None:
        color = COLORS['white']
    c.setFillColorRGB(*color)
    c.setFont(font, size)
    c.drawString(x, y, text)


def draw_text_centered(c, x, y, text, font=None, size=12, color=None, bold=False):
    """Draw centered text at x position."""
    if font is None:
        if bold:
            font = FONT_BODY_BOLD
        else:
            font = FONT_BODY
    if color is None:
        color = COLORS['white']
    c.setFillColorRGB(*color)
    c.setFont(font, size)
    c.drawCentredString(x, y, text)


def draw_wrapped_text(c, x, y, text, max_width, font=None, size=12, color=None,
                      bold=False, line_spacing=1.4):
    """Draw text wrapped within max_width. Returns the y position after the last line."""
    if font is None:
        if bold:
            font = FONT_BODY_BOLD
        else:
            font = FONT_BODY
    if color is None:
        color = COLORS['text_body']

    c.setFillColorRGB(*color)
    c.setFont(font, size)

    words = text.split(' ')
    lines = []
    current_line = ''

    for word in words:
        test_line = current_line + (' ' if current_line else '') + word
        if c.stringWidth(test_line, font, size) <= max_width:
            current_line = test_line
        else:
            if current_line:
                lines.append(current_line)
            current_line = word

    if current_line:
        lines.append(current_line)

    line_height = size * line_spacing
    current_y = y

    for line in lines:
        c.setFillColorRGB(*color)
        c.setFont(font, size)
        c.drawString(x, current_y, line)
        current_y -= line_height

    return current_y


def draw_decorative_circle(c, cx, cy, radius, color, alpha=0.08):
    """Draw a subtle decorative circle."""
    c.saveState()
    # Blend color with background to simulate transparency
    bg = COLORS['bg_darker']
    blended = (
        bg[0] + (color[0] - bg[0]) * alpha,
        bg[1] + (color[1] - bg[1]) * alpha,
        bg[2] + (color[2] - bg[2]) * alpha,
    )
    c.setFillColorRGB(*blended)
    c.circle(cx, cy, radius, fill=1, stroke=0)
    c.restoreState()


def draw_page_number(c, page_num, total):
    """Draw page number in the bottom right."""
    draw_text(c, PAGE_W - MARGIN_RIGHT, MARGIN_BOTTOM - 5,
              f"{page_num}/{total}", font=FONT_MONO, size=8, color=COLORS['gray'])


def draw_section_label(c, x, y, text, color=None):
    """Draw a section label like '// Introducao' in mono style."""
    if color is None:
        color = COLORS['cyan']
    draw_text(c, x, y, text, font=FONT_MONO, size=10, color=color)


def draw_badge(c, x, y, text, bg_color=None, text_color=None, font_size=8):
    """Draw a small inline badge/pill."""
    if bg_color is None:
        bg_color = COLORS['card']
    if text_color is None:
        text_color = COLORS['text_light']

    padding_h = 6
    padding_v = 3
    text_w = pdfmetrics.stringWidth(text, FONT_BODY, font_size)
    badge_w = text_w + padding_h * 2
    badge_h = font_size + padding_v * 2

    draw_rounded_rect(c, x, y - padding_v, badge_w, badge_h, radius=4,
                      fill_color=bg_color, stroke_color=COLORS['border'])
    draw_text(c, x + padding_h, y + 1, text, size=font_size, color=text_color)

    return badge_w


# ============================================================
# PAGE BUILDERS
# ============================================================

def build_cover(c):
    """Page 1: Cover page."""
    draw_page_bg(c, COLORS['bg_darker'])

    # Decorative circles
    draw_decorative_circle(c, 100, PAGE_H - 100, 180, COLORS['cyan'], 0.06)
    draw_decorative_circle(c, PAGE_W - 80, 200, 150, COLORS['purple'], 0.05)
    draw_decorative_circle(c, PAGE_W / 2, PAGE_H / 2 + 50, 250, COLORS['cyan'], 0.03)

    # Top accent bar - cyan line across full width
    draw_accent_line(c, 0, PAGE_H - 3, PAGE_W, color=COLORS['cyan'], thickness=3)

    # Logo placeholder at top-left
    draw_text(c, MARGIN_LEFT, PAGE_H - 45, "[ LOGO ]",
              font=FONT_BODY_BOLD, size=14, color=COLORS['cyan'])

    # Main title centered
    title_y = PAGE_H - 280
    draw_text_centered(c, PAGE_W / 2, title_y + 35,
                       "10 Processos que Toda PME",
                       font=FONT_BODY_BOLD, size=28, color=COLORS['white'])
    draw_text_centered(c, PAGE_W / 2, title_y - 5,
                       "Pode Automatizar Hoje",
                       font=FONT_BODY_BOLD, size=28, color=COLORS['white'])

    # Decorative line under title
    line_w = 80
    draw_accent_line(c, PAGE_W / 2 - line_w / 2, title_y - 30, line_w,
                     color=COLORS['cyan'], thickness=2)

    # Subtitle
    draw_text_centered(c, PAGE_W / 2, title_y - 60,
                       "Um guia pratico da Time Saving Tech",
                       size=14, color=COLORS['gray'])

    # Bottom website
    draw_text_centered(c, PAGE_W / 2, MARGIN_BOTTOM + 30,
                       "timesavingtech.com.br",
                       size=12, color=COLORS['cyan'])

    # Bottom accent line
    draw_accent_line(c, PAGE_W / 2 - 100, MARGIN_BOTTOM + 20, 200,
                     color=COLORS['border'], thickness=1)

    c.showPage()


def build_introduction(c):
    """Page 2: Introduction."""
    draw_page_bg(c, COLORS['bg_dark'])

    # Decorative
    draw_decorative_circle(c, PAGE_W - 50, PAGE_H - 80, 120, COLORS['purple'], 0.04)

    y = PAGE_H - MARGIN_TOP

    # Section label
    draw_section_label(c, MARGIN_LEFT, y, "// Introducao")
    y -= 8
    draw_accent_line(c, MARGIN_LEFT, y, 60, color=COLORS['cyan'], thickness=2)

    # Title
    y -= 40
    draw_text(c, MARGIN_LEFT, y, "Por que automatizar?",
              font=FONT_BODY_BOLD, size=22, color=COLORS['white'])

    # Body text
    y -= 40
    body = (
        "Se voce tem uma PME, provavelmente seu time gasta horas toda semana "
        "em tarefas que poderiam ser feitas automaticamente. Este guia mostra "
        "10 processos concretos - com exemplos reais - que voce pode comecar "
        "a automatizar agora."
    )
    y = draw_wrapped_text(c, MARGIN_LEFT, y, body, CONTENT_W,
                          size=13, color=COLORS['text_body'], line_spacing=1.6)

    # Highlight card with key stat
    y -= 30
    card_h = 100
    card_w = CONTENT_W
    card_x = MARGIN_LEFT
    card_y = y - card_h

    draw_card(c, card_x, card_y, card_w, card_h)

    # Cyan left border on the card
    c.saveState()
    c.setFillColorRGB(*COLORS['cyan'])
    c.roundRect(card_x, card_y, 4, card_h, 2, fill=1, stroke=0)
    c.restoreState()

    # Stat content inside card
    stat_x = card_x + 20
    stat_y = card_y + card_h - 30
    draw_text(c, stat_x, stat_y, "VOCE SABIA?",
              font=FONT_MONO, size=9, color=COLORS['cyan'])

    stat_y -= 22
    draw_wrapped_text(c, stat_x, stat_y,
                      "PMEs que adotam automacao economizam em media 15-25 horas "
                      "por semana em tarefas operacionais, segundo pesquisas do setor.",
                      card_w - 40, size=12, color=COLORS['text_light'], line_spacing=1.5)

    # Second highlight: what you'll find
    y = card_y - 40
    draw_text(c, MARGIN_LEFT, y, "O que voce vai encontrar neste guia:",
              font=FONT_BODY_BOLD, size=14, color=COLORS['white'])

    items = [
        "10 processos comuns que podem ser automatizados",
        "O problema que cada um resolve",
        "Ferramentas sugeridas para implementacao",
        "Economia estimada de tempo",
        "Cases reais de clientes da Time Saving Tech",
    ]

    y -= 28
    for item in items:
        # Cyan bullet
        draw_text(c, MARGIN_LEFT + 5, y, ">", font=FONT_MONO, size=10, color=COLORS['cyan'])
        draw_text(c, MARGIN_LEFT + 20, y, item, size=11, color=COLORS['text_body'])
        y -= 22

    draw_page_number(c, 2, 14)
    c.showPage()


def build_process_page(c, process, page_num):
    """Build a single process page (pages 3-12)."""
    # Alternate backgrounds
    bg = COLORS['bg_dark'] if (page_num % 2 == 1) else COLORS['bg_darker']
    draw_page_bg(c, bg)

    # Large decorative number in top-right (faded)
    c.saveState()
    # Simulate alpha by blending with background
    alpha = 0.10
    faded_color = (
        bg[0] + (COLORS['cyan'][0] - bg[0]) * alpha,
        bg[1] + (COLORS['cyan'][1] - bg[1]) * alpha,
        bg[2] + (COLORS['cyan'][2] - bg[2]) * alpha,
    )
    c.setFillColorRGB(*faded_color)
    c.setFont(FONT_BODY_BOLD, 120)
    c.drawRightString(PAGE_W - 20, PAGE_H - 120, process['num'])
    c.restoreState()

    y = PAGE_H - MARGIN_TOP

    # Process icon in a styled box
    icon_box_size = 36
    icon_x = MARGIN_LEFT
    icon_y = y - icon_box_size + 5

    draw_rounded_rect(c, icon_x, icon_y, icon_box_size, icon_box_size,
                      radius=6, fill_color=COLORS['card'], stroke_color=COLORS['border'])
    draw_text_centered(c, icon_x + icon_box_size / 2, icon_y + 10,
                       process['icon'], font=FONT_MONO, size=12, color=COLORS['cyan'])

    # Process number + title
    title_x = icon_x + icon_box_size + 12
    draw_text(c, title_x, y - 5,
              f"{process['num']}.", font=FONT_MONO, size=11, color=COLORS['cyan'])
    draw_text(c, title_x, y - 25,
              process['title'], font=FONT_BODY_BOLD, size=18, color=COLORS['white'])

    # Divider line
    y -= 50
    draw_accent_line(c, MARGIN_LEFT, y, CONTENT_W, color=COLORS['border'], thickness=1)

    # --- Card 1: PROBLEMA ---
    y -= 20
    card_h = 80
    card_w = CONTENT_W
    card_x = MARGIN_LEFT
    card_y = y - card_h

    draw_card(c, card_x, card_y, card_w, card_h)

    label_x = card_x + 15
    label_y = card_y + card_h - 22
    draw_text(c, label_x, label_y, "PROBLEMA",
              font=FONT_MONO, size=9, color=COLORS['gray'])

    text_y = label_y - 20
    draw_wrapped_text(c, label_x, text_y, process['problem'],
                      card_w - 30, size=11, color=COLORS['text_body'], line_spacing=1.4)

    # --- Card 2: SOLUCAO ---
    y = card_y - 15
    card_y = y - card_h

    draw_card(c, card_x, card_y, card_w, card_h)

    # Cyan left accent
    c.saveState()
    c.setFillColorRGB(*COLORS['cyan'])
    c.roundRect(card_x, card_y, 4, card_h, 2, fill=1, stroke=0)
    c.restoreState()

    label_y = card_y + card_h - 22
    draw_text(c, label_x, label_y, "SOLUCAO",
              font=FONT_MONO, size=9, color=COLORS['cyan'])

    text_y = label_y - 20
    draw_wrapped_text(c, label_x, text_y, process['solution'],
                      card_w - 30, size=11, color=COLORS['text_light'], line_spacing=1.4)

    # --- Card 3: FERRAMENTAS ---
    y = card_y - 15
    tools_card_h = 55
    card_y = y - tools_card_h

    draw_card(c, card_x, card_y, card_w, tools_card_h)

    label_y = card_y + tools_card_h - 22
    draw_text(c, label_x, label_y, "FERRAMENTAS",
              font=FONT_MONO, size=9, color=COLORS['purple'])

    # Draw tool badges
    badge_x = label_x
    badge_y = label_y - 22
    for tool in process['tools']:
        badge_w = draw_badge(c, badge_x, badge_y, tool,
                             bg_color=COLORS['border'], text_color=COLORS['text_light'],
                             font_size=9)
        badge_x += badge_w + 8

    # --- Card 4: ECONOMIA ESTIMADA ---
    y = card_y - 15
    savings_card_h = 55
    card_y = y - savings_card_h

    draw_card(c, card_x, card_y, card_w, savings_card_h)

    label_y = card_y + savings_card_h - 22
    draw_text(c, label_x, label_y, "ECONOMIA ESTIMADA",
              font=FONT_MONO, size=9, color=COLORS['green'])

    text_y = label_y - 22
    draw_text(c, label_x, text_y, process['savings'],
              font=FONT_BODY_BOLD, size=14, color=COLORS['green'])

    # --- CASE REAL (if available) ---
    if process.get('case_real'):
        y = card_y - 20
        case_card_h = 72
        case_y = y - case_card_h

        draw_card(c, card_x, case_y, card_w, case_card_h,
                  fill_color=COLORS['card'], border_color=COLORS['cyan_dark'])

        # Cyan left border
        c.saveState()
        c.setFillColorRGB(*COLORS['cyan'])
        c.roundRect(card_x, case_y, 4, case_card_h, 2, fill=1, stroke=0)
        c.restoreState()

        case_label_y = case_y + case_card_h - 22
        draw_text(c, label_x, case_label_y, "CASE REAL",
                  font=FONT_MONO, size=9, color=COLORS['cyan'])

        case_text_y = case_label_y - 20
        draw_wrapped_text(c, label_x, case_text_y, process['case_real'],
                          card_w - 30, size=11, color=COLORS['text_light'], line_spacing=1.4)

    draw_page_number(c, page_num, 14)
    c.showPage()


def build_cta(c):
    """Page 13: Call to action."""
    draw_page_bg(c, COLORS['bg_darker'])

    # Decorative
    draw_decorative_circle(c, PAGE_W / 2, PAGE_H / 2, 200, COLORS['cyan'], 0.03)
    draw_decorative_circle(c, 80, 200, 120, COLORS['purple'], 0.04)

    y = PAGE_H - MARGIN_TOP

    # Section label
    draw_section_label(c, MARGIN_LEFT, y, "// Proximo passo")
    y -= 8
    draw_accent_line(c, MARGIN_LEFT, y, 80, color=COLORS['cyan'], thickness=2)

    # Title
    y -= 40
    title_text = "Qual desses processos faz mais sentido para o seu negocio?"
    y = draw_wrapped_text(c, MARGIN_LEFT, y, title_text, CONTENT_W,
                          font=FONT_BODY_BOLD, size=20, color=COLORS['white'], line_spacing=1.4)

    # Body text
    y -= 20
    body = (
        "Oferecemos um diagnostico gratuito de 30 minutos para identificar "
        "as melhores oportunidades de automacao na sua empresa."
    )
    y = draw_wrapped_text(c, MARGIN_LEFT, y, body, CONTENT_W,
                          size=13, color=COLORS['text_body'], line_spacing=1.5)

    # CTA card with gradient-style border (using cyan border)
    y -= 30
    cta_card_h = 60
    cta_card_w = CONTENT_W
    cta_card_x = MARGIN_LEFT
    cta_card_y = y - cta_card_h

    # Outer glow effect - slightly larger card behind
    draw_rounded_rect(c, cta_card_x - 2, cta_card_y - 2, cta_card_w + 4, cta_card_h + 4,
                      radius=10, fill_color=None, stroke_color=COLORS['cyan_dark'], stroke_width=2)

    draw_card(c, cta_card_x, cta_card_y, cta_card_w, cta_card_h,
              fill_color=COLORS['card'], border_color=COLORS['cyan'])

    # CTA text inside card
    cta_text_y = cta_card_y + cta_card_h / 2 - 3
    draw_text_centered(c, PAGE_W / 2, cta_text_y,
                       "Agende uma conversa -> timesavingtech.com.br",
                       font=FONT_BODY_BOLD, size=14, color=COLORS['cyan'])

    # Contact information section
    y = cta_card_y - 50
    draw_text(c, MARGIN_LEFT, y, "CONTATO",
              font=FONT_MONO, size=10, color=COLORS['gray'])
    y -= 5
    draw_accent_line(c, MARGIN_LEFT, y, 50, color=COLORS['border'], thickness=1)

    contacts = [
        ("Site", "timesavingtech.com.br", COLORS['cyan']),
        ("Email", "luis@timesavingtech.com.br", COLORS['text_light']),
        ("WhatsApp", "+55 19 98125-0530", COLORS['text_light']),
    ]

    y -= 30
    for label, value, val_color in contacts:
        # Draw each contact as a small card
        contact_card_h = 45
        contact_card_y = y - contact_card_h

        draw_card(c, MARGIN_LEFT, contact_card_y, CONTENT_W, contact_card_h)

        draw_text(c, MARGIN_LEFT + 15, contact_card_y + contact_card_h - 18,
                  label.upper(), font=FONT_MONO, size=8, color=COLORS['gray'])
        draw_text(c, MARGIN_LEFT + 15, contact_card_y + contact_card_h - 35,
                  value, size=12, color=val_color)

        y = contact_card_y - 8

    draw_page_number(c, 13, 14)
    c.showPage()


def build_back_cover(c):
    """Page 14: Back cover."""
    draw_page_bg(c, COLORS['bg_darker'])

    # Decorative circles
    draw_decorative_circle(c, PAGE_W / 2, PAGE_H / 2, 200, COLORS['cyan'], 0.03)
    draw_decorative_circle(c, PAGE_W / 2, PAGE_H / 2, 300, COLORS['cyan'], 0.015)

    center_x = PAGE_W / 2
    center_y = PAGE_H / 2

    # Logo centered
    draw_text_centered(c, center_x, center_y + 80,
                       "[ LOGO ]", font=FONT_BODY_BOLD, size=18, color=COLORS['cyan'])

    # Company name
    draw_text_centered(c, center_x, center_y + 35,
                       "Time Saving Tech", font=FONT_BODY_BOLD, size=28, color=COLORS['white'])

    # Tagline
    draw_text_centered(c, center_x, center_y - 5,
                       "Economize tempo. Multiplique resultados.",
                       size=16, color=COLORS['gray'])

    # Cyan accent line
    line_w = 120
    draw_accent_line(c, center_x - line_w / 2, center_y - 30, line_w,
                     color=COLORS['cyan'], thickness=2)

    # Website
    draw_text_centered(c, center_x, center_y - 60,
                       "timesavingtech.com.br",
                       size=14, color=COLORS['cyan'])

    # Top accent bar
    draw_accent_line(c, 0, PAGE_H - 3, PAGE_W, color=COLORS['cyan'], thickness=3)

    # Bottom accent bar
    draw_accent_line(c, 0, 3, PAGE_W, color=COLORS['cyan'], thickness=3)

    c.showPage()


# ============================================================
# MAIN GENERATION
# ============================================================

def generate_lead_magnet(output_path):
    """Generate the complete lead magnet PDF."""
    print(f"\nGenerating lead magnet PDF...")
    print(f"  Output: {output_path}")
    print(f"  Format: A4 ({PAGE_W:.1f} x {PAGE_H:.1f} pt)")

    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("10 Processos que Toda PME Pode Automatizar Hoje")
    c.setAuthor("Time Saving Tech")
    c.setSubject("Guia de Automacao para PMEs")

    # Page 1: Cover
    build_cover(c)

    # Page 2: Introduction
    build_introduction(c)

    # Pages 3-12: The 10 Processes
    for i, process in enumerate(PROCESSES):
        build_process_page(c, process, page_num=3 + i)

    # Page 13: CTA
    build_cta(c)

    # Page 14: Back cover
    build_back_cover(c)

    c.save()
    print(f"\n  PDF generated successfully!")
    print(f"  Total pages: 14")
    print(f"  File: {output_path}")


if __name__ == '__main__':
    output_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(output_dir, 'lead-magnet-automacao-pme.pdf')

    generate_lead_magnet(output_file)
    print("\nDone!")
