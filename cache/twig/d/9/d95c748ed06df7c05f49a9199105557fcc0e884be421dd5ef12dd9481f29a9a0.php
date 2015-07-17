<?php

/* partials/header.html.twig */
class __TwigTemplate_d95c748ed06df7c05f49a9199105557fcc0e884be421dd5ef12dd9481f29a9a0 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<section class=\"header\">
    <a class=\"burger-icon\" href=\"#\">
        <img src=\"";
        // line 3
        echo (isset($context["theme_url"]) ? $context["theme_url"] : null);
        echo "/images/burguer.png\">
    </a>        
    <div class=\"logo\">
        <h5>";
        // line 6
        echo $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "site", array()), "title", array());
        echo "</h5>
    </div>
    <nav id=\"original-menu\" class=\"navigation-menu\">
        ";
        // line 9
        $this->loadTemplate("partials/navigation.html.twig", "partials/header.html.twig", 9)->display(array_merge($context, array("withSuperFish" => "true")));
        // line 10
        echo "    </nav>
</section>

<nav id=\"mobile-menu\" class=\"\">
    ";
        // line 14
        $this->loadTemplate("partials/navigation.html.twig", "partials/header.html.twig", 14)->display(array_merge($context, array("withSuperFish" => "false")));
        // line 15
        echo "</nav>";
    }

    public function getTemplateName()
    {
        return "partials/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  45 => 15,  43 => 14,  37 => 10,  35 => 9,  29 => 6,  23 => 3,  19 => 1,);
    }
}
